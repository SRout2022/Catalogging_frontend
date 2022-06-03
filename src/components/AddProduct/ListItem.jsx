import React from "react";

export default function ListItem(prop)
{
    // return(
    //     <div id="item-container">
    //         <div class="addProduct-navbar-col entry">
    //             <p>EL-012</p>
    //         </div>
    //         <div class="addProduct-navbar-col entry entry-img-div">
    //             <img class="entry-img" src="https://media.istockphoto.com/photos/beautiful-mixed-race-woman-sitting-on-white-chair-in-white-bird-mini-picture-id1257084245?b=1&k=20&m=1257084245&s=170667a&w=0&h=D2FeCJQ2jV8-AKWrabueByY5s8tXNT3oTPHYV_Z3hzs=" alt="product-pic"></img>
    //         </div>
    //         <div class="addProduct-navbar-col entry">
    //             <p>5000</p>
    //         </div>
    //         <div class="addProduct-navbar-col entry">
    //             <p>Text</p>
    //         </div>
    //         <div class="addProduct-navbar-col entry">
    //             <p>Text</p>
    //         </div>
    //         <div class="addProduct-navbar-col entry">
    //             <p>Text</p>
    //         </div>
    //     </div>
    // );

    return (

				
                    <tbody >
                        <tr id="list-body">
                            <th scope="row "><p class="non-img-col">{prop.id}</p></th>
                            <td><img class="entry-img" src={prop.img} alt="product-pic"></img></td>
                            <td><p class="non-img-col">{prop.price}</p></td>
                            <td><p class="non-img-col">{prop.shape}</p></td>
                            <td><p class="non-img-col">{prop.color}</p></td>
                            <td><p class="non-img-col">{prop.size}</p></td>
                            <td></td>
                            <td><button id="list-delete-btn">Delete</button></td>
                        </tr>
                    </tbody>
		);

    // return (
	// 		<table>
    //             <div class="shadow p-3 mb-5 bg-white rounded">
	// 			<tr>
    //                 <th>Company</th>
	// 				<th>Contact</th>
	// 				<th>Country</th>
					
	// 			</tr>
    //             </div>
	// 			<tr>
	// 				<td>Alfreds Futterkiste</td>
	// 				<td>Maria Anders</td>
	// 				<td>Germany</td>
	// 			</tr>
	// 			<tr>
	// 				<td>Centro comercial Moctezuma</td>
	// 				<td>Francisco Chang</td>
	// 				<td>Mexico</td>
	// 			</tr>
	// 		</table>
	// 	);
}