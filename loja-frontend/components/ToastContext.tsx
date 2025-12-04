"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
  }, []);

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(null), 2500);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-6 right-6 z-[60] bg-slate-900 text-slate-100 px-4 py-3 rounded-xl shadow-lg border border-slate-700 text-sm max-w-xs"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}