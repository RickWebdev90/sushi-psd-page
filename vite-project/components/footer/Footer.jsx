import './Footer.css'
import { Column } from '../column/Column'

  const footerData = {
    description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos itaque perspiciatis assumenda ea tenetur corrupti cum. Non neque modi praesentium molestias, earum voluptas at vero. At similique reprehenderit quam sapiente.'],
    about: ['History', 'Our Team', 'Brand Guidelines', 'Terms & Condition', 'Privacy Policy'],
    services: ['How to Order', 'Our Product', 'Order Status', 'Promo', 'Payment Method'],
    other: ['Contact Us', 'Help', 'Privacy']
  };

export const Footer = () => {
  return (
    <footer>
    <div className='footer-container'>
        <div className='icon-col'>
        <Column title='Title Here' items={footerData.description}/>
            <div className='icons'>
                <img src='../public/assets/footer/Facebook.png' alt='facebook-logo' />
                <img src='../public/assets/footer/Instagram.png' alt='instagram-logo' />
                <img src='../public/assets/footer/Twitter.png' alt='twitter-logo' />
                <img src='../public/assets/footer/Whatsapp.png' alt='whatsapp-logo' />
            </div>
        </div>
            <div className='link-section'>
                <Column title='About' items={footerData.about} />
                <Column title='Services' items={footerData.services} />
                <Column title='Other' items={footerData.other} />
            </div>
    </div>
    </footer>
)
}

