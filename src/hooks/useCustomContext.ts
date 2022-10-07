import { useContext } from "react";
import {
  CharacterActionContext,
  CharacterContext
} from "../contexts/CharacterContextProvider";

export const useCharacterActionContext = () =>
  useContext(CharacterActionContext);

export const useCharacterContext = () => useContext(CharacterContext);
