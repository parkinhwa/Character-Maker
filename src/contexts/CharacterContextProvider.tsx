import { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";

interface CharacterType {
  hair: string
  expresstion: string
}

interface CharacterActionType {
  setCaracter: (inputCharacter: CharacterType) => void
}

export const CharacterContext = createContext<CharacterType>({
  hair: "img/단발머리.png",
  expresstion: "img/표정1.png"
});

export const CharacterActionContext = createContext<CharacterActionType>({} as any);

interface CharacterContextProviderType {
  children: ReactNode
}

export const CharacterContextProvider = ({
  children
}: CharacterContextProviderType) => {
  const [context, setContext] = useState<CharacterType>({
    hair: "img/단발머리.png",
    expresstion: "img/표정1.png"
  });
  const actions = useMemo(() => ({
    setCaracter (inputCharacter: CharacterType) {
      setContext((prevContext) => ({
        ...prevContext,
        ...inputCharacter
      }))
    }
  }), [])

  return (
    <CharacterActionContext.Provider value={actions}>
      <CharacterContext.Provider value={context}>
        {children}
      </CharacterContext.Provider>
    </CharacterActionContext.Provider>
  );
};
