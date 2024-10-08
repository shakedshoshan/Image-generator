import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import  pool  from "../db.js";

export const login = async (req, res) => {
	try {
        
		const { username, password } = req.body;
        
		const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
		const user = result.rows[0];
        

		if (!user) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        
		if (!isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user.id, res);

		res.status(200)
        .json({
			id: user.id,
			username: user.username,
			gender: user.gender,
			profilePic: user.profilepic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const signup = async (req, res) => {
	try {
		const { username, password, confirmPassword, gender } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const userExists = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

		if (userExists.rows.length > 0) {
			return res.status(400).json({ error: "Username already exists" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
		const profilePic = gender === "male" ? boyProfilePic : girlProfilePic;

		const newUser = await pool.query(
			"INSERT INTO users (username, password, gender, profilepic) VALUES ($1, $2, $3, $4) RETURNING *",
			[username, hashedPassword, gender, profilePic]
		);

		if (newUser.rows.length > 0) {
			generateTokenAndSetCookie(newUser.rows[0].id, res);

			res.status(201)
            .json({
				id: newUser.rows[0].id,
				username: newUser.rows[0].username,
				gender: newUser.rows[0].gender,
				profilePic: newUser.rows[0].profilepic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (err) {
		console.log("Error in signup controller", err.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
	try {
    		// Start of Selection
    		res.clearCookie("jwt", { 
    			httpOnly: true, 
    			sameSite: "lax", 
    			secure: process.env.NODE_ENV !== "development",
    			domain: "localhost",
    		});
		res.status(200)
        .json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};