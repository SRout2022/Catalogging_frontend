import React from "react";

export default function ListItem2(prop)
{
    return (

				
        <tbody id="List-item-2-body">
            <tr id="monitor-prod-thead" class="shadow p-3 mb-5 bg-white rounded ">
                <th scope="row " class="row-item-LI2" style={{fontWeight:"500"}}><a href="">{prop.name}</a></th>
                <td class="row-item-LI2"><p >{prop.date}</p></td>
                <td class="row-item-LI2"><p >{prop.state}</p></td>
                <td class="row-item-LI2"><a href="" ><u>{prop.tableLink}</u></a></td>
            </tr>
        </tbody>
);

    // return (
    //     <table id="list-Table" class="table">
    //         <thead class="shadow p-3 mb-5 bg-white rounded ">
    //             <tr>
    //             <th scope="col" id="list-first-item"><div class="addProduct-navbar-col">Lorem Ipsum </div></th>
    //                 <th scope="col"><div class="addProduct-navbar-col">10 April,2022</div></th>
    //                 <th scope="col"><div class="addProduct-navbar-col">Processed </div></th>
    //                 <th scope="col"><div class="addProduct-navbar-col">View Paper</div></th>
    //             </tr>
    //         </thead>
    //     </table>
    // );
}