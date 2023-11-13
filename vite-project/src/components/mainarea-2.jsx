import background from "../assets/Background.png"
import sushi from "../assets/sushi-background.png"
import "./rick.css"


export default function SectionRick() {
    console.log(background)
    return (
        <div>
            <div  className="Order" style={{ 
            backgroundImage: `url(${background})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
                }}>
            <div className="Orderdiv1">
            <div className="Orderdiv2">
            <div className="Orderdiv3"><h1 className="OrderTitle">Title Here</h1></div>
            <div className="Orderdiv4"><p className="OrderText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ab consequatur accusantium ducimus cumque optio dolorem ut esse odit doloribus est aspernatur quaerat architecto in officiis, officia, ratione adipisci ex.</p></div>
            <div className="Orderdiv5"><button className="Orderbutton">ORDER NOW</button></div>
            </div>
            <div className="Orderdiv6">
            <img src="\public\Rick\Group 4\sushi.png" className="OrderSushi"/>
            </div>   {/* <img src="\public\Rick\Group 4\Background.png"/> */}
            </div>
            </div>
            <div className="Reference" style={{
             backgroundImage: `url(${sushi})`,
             backgroundSize: "contain",
             backgroundRepeat: "no-repeat"
        }}>
            <div className="div2">
                <img src="\public\Rick\Group 5\Profile.jpg" className="Profile"/>
            </div>
            <div className="div3">
            <h1 className="ReferenceText">If you are a culinary fan, if you like to spend time in your kitchen, you likey find yourself lookng for a reliable resources through wich you can</h1>
            </div>
            <div className="div4">
            <span className="Name">Phoebe Frazier</span>
            </div>
        </div>
        </div>
        )

}