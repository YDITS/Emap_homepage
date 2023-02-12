import { useState , useEffect } from "react";
import { User } from "../types/user";

const readUser = (): User | undefined => {
  const user = sessionStorage.getItem("user");
  return user != null ? JSON.parse(user) : undefined;
};

export const useUser = () => {
    const [user, setUser] = useState<User | undefined>();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setUser(readUser());
      setLoading(false);
    }, []);
  
    return {
      user,
      loading,
    };
};

export const setUser = (user : User) : Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const _userData = {
       "name" : user.name,
       "id" : user.id,
       "password" : user.password,
       "logined": user.logined
    } as User

    console.log(`[SAVE] : `+JSON.stringify(_userData))
    sessionStorage.setItem('user', JSON.stringify(_userData));
  
    console.log("[log] SetUserLogined "+_userData)
    resolve()
  })
}
  