    // Start of Selection
    import { create } from "zustand";
    
    const useAuth = create((set) => ({
    	authUser: null,
    	setAuthUser: (authUser) => set({ authUser }),
        getAuthUser: () => get().authUser,
        // logout: () => set({ authUser: null }),
    }));
    
    export default useAuth;

