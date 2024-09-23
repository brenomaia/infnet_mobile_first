import Menu from "./components/Menu"
import Product from "./components/Product"
import RelatedProducts from "./components/RelatedProducts"
import Reviews from "./components/Reviews"

export default function App() {
    const relatedProducts = [
        {
            name: "Iphone",
            price: "5.000,00",
            imgPath: "../../assets/iphone.png"
        },
        {
            name: "Airpods",
            price: "2.000,00",
            imgPath: "../../assets/airpods.png"
        }
    ]

    const reviews = [
        {
            author: "Rafael",
            date: "2024-09-20",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam doloremque distinctio similique sequi odio fugiat tenetur eos sint quasi sit quas, itaque doloribus! Qui officia illum eaque natus quo non!"
        },
        {
            author: "Miguel",
            date: "2025-12-11",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quisquam inventore fugiat velit labore sed, molestiae ipsum, quo quis distinctio sequi dolorum fugit maiores harum atque libero porro beatae cum."
        }, 
        {
            author: "Gabriel",
            date: "2023-12-11",
            comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae tenetur explicabo dolorum architecto qui. Quia repudiandae voluptatibus porro eveniet quos eum. Optio ullam quo numquam explicabo labore odit, dolor praesentium!"
        }
    ]

    return (
        <>
            < Menu />
            <Product 
            imgPath="../../assets/macbookpro.png" 
            name="Macbook Pro" 
            price="15.000,00" 
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim in optio, error quasi nulla reiciendis eaque rem repellat cumque, ipsam nihil nisi voluptas obcaecati voluptatem tempora deleniti aliquid ex perspiciatis."
            />

            < RelatedProducts products={relatedProducts}/>

            < Reviews reviews={reviews} />
        </>
    )
}