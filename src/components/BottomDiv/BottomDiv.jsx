import styles from './BottomDiv.module.css';

const Bottomdiv =() => {

    const data = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
            name: "Gladis Lennon",
            role: "Head of SEO"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
            name: "Gladis Lennon",
            role: "Head of SEO"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
            name: "Gladis Lennon",
            role: "Head of SEO"
        },
        {
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
            name: "Gladis Lennon",
            role: "Head of SEO"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
            name: "Gladis Lennon",
            role: "Head of SEO"
        },
        {
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.",
            name: "Gladis Lennon",
            role: "Head of SEO"
        }
    ]
    return (
        <div className={styles.bottomDiv}>
            <div className={styles.card_container}>
                {
                    data.map((item, index) =>(
                        <div key={index} className={styles.card}>
                            <p className={styles.card_par}>{item.text}</p>
                            <div className={styles.card_footer}>
                                <div className={styles.card_img}>
                                    <img style={{height: "40px", width: "40px"}} src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="profile" />
                                </div>

                                <div className={styles.card_text}>
                                    <h3>{item.name}</h3>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Bottomdiv;