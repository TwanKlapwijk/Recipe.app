import {
  Card,
  CardBody,
  CardHeader,
  Box,
  Text,
  Stack,
  Heading,
  Tag,
  Flex,
} from "@chakra-ui/react";

export const RecipeItemCard = ({ recipe, clickFn }) => {
  const hasVeganLabel = recipe.healthLabels.filter((healthLabel) => {
    return (
      healthLabel.toLowerCase().includes("vegetarian") ||
      healthLabel.toLowerCase().includes("vegan")
    );
  });

  const hasDietLabel = recipe.dietLabels.length > 0;
  const hasCautionLabel = recipe.cautions.length > 0;
  return (
    <Card
      cursor={"pointer"}
      onClick={() => clickFn(recipe)}
      justifyContent="center"
      textAlign="center"
      backgroundColor={"gray.300"}
      width={"300px"}
      overflow={"hidden"}
    >
      <CardHeader padding={"0"}>
        <Box
          width="100%"
          height="150px"
          backgroundImage={`url(${recipe.image})`}
          backgroundSize="cover"
          backgroundPosition="center"
        ></Box>
      </CardHeader>
      <CardBody padding={"1rem"} textAlign={"center"}>
        <Text fontSize={"0.8rem"} textTransform="uppercase">
          {recipe.mealType}
        </Text>
        <Stack>
          <Heading fontSize={"1.25rem"}>{recipe.label}</Heading>
          <Flex gap="5px" justifyContent="center">
            {hasVeganLabel.map((label) => (
              <Tag
                fontSize="0.8rem"
                textTransform="uppercase"
                backgroundColor="purple.200"
                key={label}
              >
                {label}
              </Tag>
            ))}
          </Flex>
          <Flex gap="5px" justifyContent="center">
            {hasDietLabel &&
              recipe.dietLabels.map((label) => (
                <Tag
                  fontSize="0.8rem"
                  textTransform="uppercase"
                  backgroundColor="green.200"
                  key={label}
                >
                  {label}
                </Tag>
              ))}
          </Flex>
          <Text fontWeight={"600"}>Dish type: {recipe.dishType}</Text>
          <Text fontWeight={"700"} color={"red.600"}>
            Cautions:
          </Text>
          <Flex gap="5px" justifyContent="center" flexWrap={"wrap"}>
            {hasCautionLabel &&
              recipe.cautions.map((label) => (
                <Tag
                  fontSize="0.8rem"
                  textTransform="uppercase"
                  backgroundColor="red.200"
                  key={label}
                >
                  {label}
                </Tag>
              ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
