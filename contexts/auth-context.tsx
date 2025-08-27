"use client";

import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
    const supabase = createClient();
  const [loading, setLoading] = useState<boolean>(false);
useEffect(() =>{
    async function checkUser{
        try{
            const{data:{session}}=await supabase.auth.getSession();
            setUser(session?.user ?? null);
            const{data:{subscription}}=supabase.auth.onAuthStateChange(async(event,session)=>{
                setUser(session?.user ?? null);
                
            });
            return() =>subscription.unsubscribe();
        }catch(error){
            console.error
        }finally{
            setLoading(false)
        }
    }
checkUser();
})
  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
