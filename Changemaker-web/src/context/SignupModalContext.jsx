import { createContext, useCallback, useContext, useMemo, useState } from "react";

const SignupModalContext = createContext(null);

export function SignupModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSignupModal = useCallback(() => setIsOpen(true), []);
  const closeSignupModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openSignupModal, closeSignupModal }),
    [isOpen, openSignupModal, closeSignupModal],
  );

  return (
    <SignupModalContext.Provider value={value}>
      {children}
    </SignupModalContext.Provider>
  );
}

export function useSignupModal() {
  const context = useContext(SignupModalContext);
  if (!context) {
    throw new Error("useSignupModal must be used within SignupModalProvider");
  }
  return context;
}
