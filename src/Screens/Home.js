import React, { useEffect, } from 'react'
import {
    Image,
    StyleSheet,
    FlatList,
    View,
    TouchableHighlight,
} from 'react-native'
import { Text, } from "@react-native-material/core"
import { useSelector, useDispatch, } from 'react-redux'
import { getProducts, } from '../Redux/actions/productActions'
import Loader from '../Components/Loader'
import { DOMAIN, } from '../Utils/config'
import { Icon, } from "@react-native-material/core"

export default function({ navigation, }) {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  if (products.loading) {
    return <Loader />
  }
  
  return (
    <View style={styles.body}>
      <View style={styles.productsContainer}>
        <FlatList
          onEndReached={() => {
            dispatch(getProducts())
          }}
          style={styles.productList}
          data={products.data.data}
          renderItem={({
            item,
          }) => {
            
            return (
              <TouchableHighlight style={styles.productCard}>
                <>
                  <Image 
                    resizeMode='cover'
                    style={styles.productImage} 
                    source={{ uri: `${DOMAIN}${item.image_path}` }} 
                  />
                  <View style={styles.productCardView}>
                    <Text variant='h5' numberOfLines={1}>{item.name}</Text>
                  </View>
                  <View style={styles.productCardView}>
                    <Text color='rgb(117, 122, 129)' variant='h7'>{item.company.name}</Text>
                  </View>
                  <View style={styles.productCardView}>
                    <Text 
                      color='#0f1f37' 
                      variant='h7'
                      style={styles.formattedCost}
                    >
                      {item.formatted_cost}
                    </Text>
                  </View>
                  <View style={[styles.productCardView, styles.bottomProductCard,]}>
                    <Text  style={styles.review}>
                      {'0.00' !== item.review ? `Rated ${item.review}` : null}
                    </Text>
                    <Text 
                      style={styles.basketIconContainer} 
                      variant='h6'
                    >
                      <Icon name='add-shopping-cart' style={styles.basketIcon}  />
                    </Text>
                  </View>
                </>
              </TouchableHighlight>
          )}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productsContainer: {
    justifyContent: 'center',
    alignItems: 'center',    
  },
  productList: {
    backgroundColor: '#fff',
  },
  productCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    marginBottom: 30,
    borderRadius: 4,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    height: 200,
    width: '100%',
  },
  productCardView: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  formattedCost: {
    textAlign: 'right',
    marginTop: 30,
    marginBottom: 30,
  },
  bottomProductCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingBottom: 30,
  },
  review: {
    color: '#070000',
    width: '75%',
    fontSize: 18,
  },
  basketIconContainer: {
    textAlign: 'right',
    width: '25%',
  },
  basketIcon: {
    color: '#6f6f77',
    fontSize: 24,
  },
})
