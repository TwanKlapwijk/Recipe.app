import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Box,
  Flex,
  SimpleGrid,
  Heading,
  Tag,
  Container,
  Stack,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Flex
      width={"100%"}
      alignItems="center"
      justifyContent={"center"}
      backgroundColor={"yellow.500"}
      minHeight="100vh"
      flexDir="column"
      padding={"1rem"}
    >
      <Card
        borderRadius="2xl"
        overflow="hidden"
        padding="0"
        minHeight="100vh"
        bg="gray.300"
        maxWidth="900px"
        width="100%"
      >
        <CardHeader padding="0">
          <Box
            border
            width="100%"
            height="300px"
            backgroundImage={`url(${recipe.image})`}
            backgroundSize="cover"
            backgroundPosition="center"
          ></Box>
        </CardHeader>
        <CardBody padding={"0"}>
          <SimpleGrid
            spacing="3rem"
            padding={{ base: "1rem", sm: "1.5rem" }}
            columns={{ base: 1, md: 2 }}
          >
            <Flex flexDirection="column">
              <Text>{recipe.mealType}</Text>
              <Stack spacing={"0.6rem"}>
                <Heading fontSize="1.25rem">{recipe.label}</Heading>
                <Box>
                  <Text>
                    {" "}
                    Total cooking time:{" "}
                    <Text as={"span"} fontWeight={"600"}>
                      {" "}
                      {recipe.totalTime} minutes
                    </Text>
                  </Text>
                  <Text>
                    {" "}
                    Servings:{" "}
                    <Text as={"span"} fontWeight={"600"}>
                      {" "}
                      {recipe.yield} portions
                    </Text>
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={"1.1rem"} fontWeight={"600"}>
                    Ingredients:{" "}
                  </Text>
                  {recipe.ingredientLines.map((ingredient) => (
                    <Text key={ingredient}>{ingredient}</Text>
                  ))}
                </Box>
              </Stack>
            </Flex>

            <Flex flexDirection="column" gap="0.6rem">
              <Text fontSize={"1.1rem"} fontWeight={"600"}>
                Health labels:
              </Text>
              <Flex gap="5px" flexWrap={"wrap"}>
                {recipe.healthLabels.map((label) => (
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
              <Text fontSize={"1.1rem"} fontWeight={"600"}>
                Diet:
              </Text>
              <Flex gap="5px" flexWrap={"wrap"}>
                {recipe.dietLabels.map((label) => (
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
              <Text fontSize={"1.1rem"} color="red.600" fontWeight={"600"}>
                {" "}
                Cautions:
              </Text>
              <Flex gap="5px" flexWrap={"wrap"}>
                {recipe.cautions.map((label) => (
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
              <Text fontSize={"1.1rem"} fontWeight={"600"}>
                {" "}
                Total nutrients:
              </Text>
              <SimpleGrid gap={"0.5rem"} columns={4}>
                <Box>
                  <Text>{Math.round(recipe.calories)}</Text>
                  <Text fontWeight={"500"}>Calories</Text>
                </Box>
                <Box>
                  <Text>
                    {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
                  </Text>
                  <Text fontWeight={"500"}>Carbs</Text>
                </Box>
                <Box>
                  <Text>
                    {Math.round(recipe.totalNutrients.PROCNT.quantity)}
                  </Text>
                  <Text fontWeight={"500"}>Protein</Text>
                </Box>
                <Box>
                  <Text>{Math.round(recipe.totalNutrients.FAT.quantity)}</Text>
                  <Text fontWeight={"500"}>Fat</Text>
                </Box>
                <Box>
                  <Text>
                    {Math.round(recipe.totalNutrients.CHOLE.quantity)}
                  </Text>
                  <Text fontWeight={"500"}>Cholesterol</Text>
                </Box>
                <Box>
                  <Text>{Math.round(recipe.totalNutrients.NA.quantity)}</Text>
                  <Text fontWeight={"500"}>Sodium</Text>
                </Box>
              </SimpleGrid>
            </Flex>
          </SimpleGrid>
        </CardBody>
        <CardFooter paddingBottom={"1rem"} padding="0">
          <Button
            backgroundColor={"blue.300"}
            margin={"0 auto"}
            onClick={() => clickFn()}
          >
            Go back to homepage
          </Button>
        </CardFooter>
      </Card>
    </Flex>
  );
};
