import Link from "next/link";
import Image from "next/image";
import { Flex,Box,Text,Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";


//creating a banner component to use further: and get to learn about props =>
const Banner = ({purpose, tittle1, tittle2,desc1,desc2,buttonText,LinkName,imageUrl}) =>(
  <Flex flexWrap="wrap" justifyContent = "center" alignItems="center" m = "20">
    <Image src={imageUrl} width={500} height = {300} alt = "banner..."/>
    <Box p = "7">
      <Text color="gray.500" fontSize="sm" fontWeight = "medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{tittle1}<br />{tittle2}</Text>
      <Text fontSize= "lg" paddingTop = "3" paddingBottom = "3" color = "gray.700">{desc1}<br/>{desc2}</Text>
      <Button fontSize="xl">
        <Link href={LinkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertiesForSale, propertiesForRent}){
  // console.log(propertiesForSale)
  // console.log(propertiesForRent)
  return(   
    <Box>
      <Banner
        purpose="Rent a Home"
        tittle1 = "Rent House for"
        tittle2 = "Everyone"
        desc1 = "Explore Aparments, Villas, Homes"
        desc2 = "and many more..."
        buttonText = "Explore Renting"
        LinkName = "/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {/* fetch the properties to rent a home and map over there.... */}
        {propertiesForRent.map((property) =><Property property = {property} key = {property.id}/>)}
      </Flex>
      <Banner
        purpose="Buy a Home"
        tittle1 = "Find,Buy & Own Your "
        tittle2 = "Dream House"
        desc1 = "Explore Aparments, Villas, Homes"
        desc2 = "and many more..."
        buttonText = "Explore Renting"
        LinkName = "/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      {/* fetch the properties to buy a home and map over there.... */}
      <Flex flexWrap="wrap">
         {propertiesForSale.map((property) =><Property property = {property} key = {property.id}/>)}
      </Flex>
    </Box>
  )
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return{
    props:{
      propertiesForSale:propertyForSale?.hits,
      propertiesForRent:propertyForRent?.hits,
    }
  }
}