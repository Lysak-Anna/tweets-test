import { useCallback, useEffect, useState } from "react";
import StackGrid, { transitions, easings } from "react-stack-grid";
import { toast } from "react-toastify";

import { getUsers } from "@/services/usersData";
import { User } from "@/types";

import { Image, Name } from "./Gallery.styled";

const transition = transitions.scaleDown;

export default function Gallery() {
  const [heroes, setHeroes] = useState<User[]>([]);

  const getHeroes = useCallback(async () => {
    try {
      const heroes = await getUsers();
      setHeroes(heroes);
    } catch (error) {
      return toast.error(
        "Something went wrong... Please, check your internet connection and try again later"
      );
    }
  }, []);

  useEffect(() => {
    getHeroes();
  }, [getHeroes]);

  return (
    <StackGrid
      monitorImagesLoaded
      columnWidth={200}
      duration={600}
      gutterWidth={15}
      gutterHeight={15}
      easing={easings.cubicOut}
      appearDelay={60}
      appear={transition.appear}
      appeared={transition.appeared}
      enter={transition.enter}
      entered={transition.entered}
      leaved={transition.leaved}
    >
      {heroes &&
        heroes.map(({ id, avatar, user }) => (
          <figure key={id}>
            <Image src={avatar} alt={user} />
            <Name>{user}</Name>
          </figure>
        ))}
    </StackGrid>
  );
}
