import { Center, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItemCard } from "../components/ui/RecipeItemCard";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const matchedRecipes = data.hits.filter((hit) => {
    return (
      hit.recipe.label.toUpperCase().includes(searchValue.toUpperCase()) ||
      hit.recipe.healthLabels.some((healthLabel) => {
        return healthLabel.toUpperCase().includes(searchValue.toUpperCase());
      })
    );
  });

  return (
    <Center
      width={"100%"}
      backgroundColor={"yellow.500"}
      minHeight="100vh"
      flexDir="column"
      padding={"1rem"}
    >
      <Stack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={"2rem"}
      >
        <Heading as="h1"> Twan's restaurant</Heading>
        <Input
          variant={"flushed"}
          onChange={searchHandler}
          size={{ base: "auto", sm: "md", md: "lg", lg: "lg" }}
          width={{ base: "18rem", sm: "md", md: "lg", lg: "lg" }}
        />

        <Flex
          maxWidth={"1600px"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap="1.5rem"
        >
          {matchedRecipes.map((recipe) => (
            <RecipeItemCard
              clickFn={clickFn}
              key={recipe.recipe.label}
              recipe={recipe.recipe}
            />
          ))}
        </Flex>
      </Stack>
    </Center>
  );
};
