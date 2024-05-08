import { createContext, useEffect, useState } from "react";

export const ImageContext = createContext(null);
export const ImageProvider = ({ children }) => {
    const [taken_image, set_taken_image] = useState(null)

    return (
        <ImageContext.Provider value={{
            set_taken_image,
            taken_image
        }}>{children}</ImageContext.Provider>
    )
}