import React, { useEffect, useState } from 'react';
import { SubHeading,MenuItem } from '../../components';
import {images,data} from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => {
  const [item, setItem] = useState(data.foodItems.filter(item => item.id==101));
  const [isSending, setIsSending] = useState(false)
  
const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setItem(true)
    // send the actual request
    await API.sendRequest()

  }, [isSending])



//  const [name, setName] = useState('Flavio')

  // useEffect(() => {
  //   console.log(item)
  // })

  
  // const itemId = e.currentTarget.id;
  
  //    useEffect(() => {
  //  console.log('This is ID',itemId);
  //    }, [itemId])
  
  
  // const handleFoodItems = (e) => {
  //   const itemId = e.currentTarget.id;
  //          setItems(data.foodItems.filter(item => parseInt(item.id)===parseInt(itemId)));
  //       console.log(items)
     
  // }
 

  

  //  const handleCocktailsItems = (e) => {
  //    console.log(e.currentTarget.id);
  // //  data.foodItems.filter(item=>item.id===itemId)
  // }

  return(
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits for you" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      {/* this is Food Item List  */}
      <div className='app__specialMenu-menu_foods flex__center'>
        <p className='app__specialMenu-menu_heading'>Delicious Food</p>
        <div className='app__specialMenu_menu_items'>
          {
              data.foodItems.map((foodItem) => (<button id={foodItem.id} key={foodItem.id} onClick={() => (data.foodItems.filter(setItem(item => parseInt(item.id)===parseInt(foodItem.id))))}  className='custom__button_menu' style={{ cursor: 'pointer', width: '100%', padding: '0 10px', margin: '2px 0' }} type='button'><MenuItem key={foodItem.id} title={foodItem.title} price={foodItem.price} /></button>))
          }
        </div>
      </div>

      {/* this is Foods and Cocktailsimage Slider  */}
      <div className='app__specialMenu-menu_img'>
        <img src={images.BroccoliSaladRecipe} alt='menu_img' />
        <button type='button ' className='custom__button'>Place Order</button>
      </div>

      {/* This is cocktail item list menu  */}
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
            {
              // onClick={handleCocktailsItems} 
            data.cocktails.map((cocktail) => (<button id={cocktail.id} key={cocktail.id}   className='custom__button_menu' style={{cursor:'pointer',width:'100%',padding:'0 10px',margin:'2px 0'}} type='button'>
              <MenuItem type='button' key={cocktail.id} title={cocktail.title} price={cocktail.price}  />
            </button>))
          }
        </div>
      </div>
    </div>
    <div style={{ margin: '15px' }}>
      <button type='button' className='custom__button'> View More..</button>
    </div>

   

  </div>
)};

export default SpecialMenu;
