import React, { useState } from "react";
import sytles from "../css/styles.css";
import Category from "./Category";

const categories = [
    {
        "category": "Desktop PC",
        "products": [
            { 
                "name": "DESKTOP1",
                "imgUrl": "./img/desktop1.png",
                "price": 12345
            },
            { 
                "name": "DESKTOP1",
                "imgUrl": "./img/desktop2.png",
                "price": 12345
            },
            { 
                "name": "DESKTOP1",
                "imgUrl": "./img/desktop3.png",
                "price": 12345
            },
            { 
                "name": "DESKTOP1",
                "imgUrl": "./img/desktop4.png",
                "price": 12345
            }
        ]
    },
    {
        "category": "Laptop PC",
        "products": [
            { 
                "name": "LAPTOP1",
                "imgUrl": "./img/laptop1.png",
                "price": 12345
            },
            { 
                "name": "LAPTOP1",
                "imgUrl": "./img/laptop2.png",
                "price": 12345
            },
            { 
                "name": "LAPTOP1",
                "imgUrl": "./img/laptop3.png",
                "price": 12345
            },
            { 
                "name": "LAPTOP1",
                "imgUrl": "./img/laptop4.png",
                "price": 12345
            }
        ]
    },
    {
        "category": "Tablet PC",
        "products": [
            { 
                "name": "TABLET1",
                "imgUrl": "./img/tablet1.png",
                "price": 12345
            },
            { 
                "name": "TABLET1",
                "imgUrl": "./img/tablet2.png",
                "price": 12345
            },
            { 
                "name": "TABLET1",
                "imgUrl": "./img/tablet3.png",
                "price": 12345
            },
            { 
                "name": "TABLET1",
                "imgUrl": "./img/tablet4.png",
                "price": 12345
            },
            { 
                "name": "TABLET1",
                "imgUrl": "./img/tablet5.png",
                "price": 12345
            }
        ]
    },
    {
        "category": "Smart Phone",
        "products": [
            { 
                "name": "PHONE1",
                "imgUrl": "./img/phone1.png",
                "price": 12345
            },
            { 
                "name": "PHONE1",
                "imgUrl": "./img/phone1.png",
                "price": 12345
            },
            { 
                "name": "PHONE1",
                "imgUrl": "./img/phone1.png",
                "price": 12345
            }
        ]
    }
]

export default function App() {

	return (
		<div>
			{
				categories.map(category => {
					return <Category category={category.category} />;
				})
			}
		</div>
	);
}
