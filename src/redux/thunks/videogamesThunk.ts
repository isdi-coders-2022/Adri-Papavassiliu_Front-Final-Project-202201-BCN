import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AddVideogameActionInterface } from "../../interfaces/Action";
import { Videogame } from "../../interfaces/Videogame";
import {
  addVideogameAction,
  deleteVideogameAction,
  loadVideogamesAction,
} from "../actions/actionsCreators";
import { RootState } from "../store";

export const loadVideogamesThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_URLAPI}videogames`);
  const videogamesList = await response.json();
  const allVideogames = videogamesList.videogames;
  dispatch(loadVideogamesAction(allVideogames));
};

export const deleteVideogameThunk =
  (videogameId: string) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_URLAPI}videogames/${videogameId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteVideogameAction(videogameId));
    }
  };

export const addVideogameThunk =
  (videogame: Videogame) =>
  async (
    dispatch: ThunkDispatch<RootState, void, AddVideogameActionInterface>
  ): Promise<void> => {
    const data = new FormData();
    const platformsToString = videogame.platforms.join(",");
    const yearToString = videogame.year?.toString();
    data.append("name", videogame.name);
    data.append("genre", videogame.genre);
    data.append("platforms", platformsToString);
    data.append("description", videogame.description);
    data.append("year", yearToString as string);
    data.append("image", videogame.image);

    const response = await fetch(
      `${process.env.REACT_APP_URLAPI}videogames/create`,
      {
        method: "POST",
        body: data,
      }
    );

    const responseVideogame = await response.json();

    if (responseVideogame.message === "Videogame created") {
      dispatch(addVideogameAction(responseVideogame.videogame));
    }
  };
