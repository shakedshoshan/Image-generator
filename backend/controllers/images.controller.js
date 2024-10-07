import pool from "../db.js";

export const insertImage = async (req, res) => {
    try {
        const { userId, imageUrl } = req.body;
        const result = await pool.query(
            "INSERT INTO images (user_id, url) VALUES ($1, $2) RETURNING *",
            [userId, imageUrl]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error in insertImage controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteImage = async (req, res) => {
    try {
        const { userId, imageUrl } = req.body;
        const result = await pool.query(
            "DELETE FROM images WHERE user_id = $1 AND url = $2 RETURNING *",
            [userId, imageUrl]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Image not found" });
        }
        res.status(200).json({ message: "Image deleted successfully" });
    } catch (error) {
        console.error("Error in deleteImage controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getAllUserImages = async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await pool.query(
            "SELECT url FROM images WHERE user_id = $1 ORDER BY created_at DESC",
            [userId]
        );
        const urls = result.rows.map(row => row.url);
        res.status(200).json(urls);
    } catch (error) {
        console.error("Error in getAllUserImages controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
