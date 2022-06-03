import React from "react";
import ListItem2 from "./ListItem2";


export default function ListBody2()
{
    return (
        <div>
            <table id="list-Table" class="table" style={{borderCollapse: "separate", borderSspacing:"0 50px"}}>
            <thead  class="shadow p-3 mb-5 bg-white rounded ">
                <tr>
                    <th scope="col" id="list-first-item"><div class="addProduct-navbar-col">Upload File </div></th>
                    <th scope="col"><div class="addProduct-navbar-col">Upload Date</div></th>
                    <th scope="col"><div class="addProduct-navbar-col">Status </div></th>
                    <th scope="col"><div class="addProduct-navbar-col">Table Link</div></th>
                </tr>
            </thead>
            <ListItem2 name="Lorem Ipsum" date="April 1,2022" state="Processed" tableLink="View Paper Work"/>
            <ListItem2 name="Lorem Ipsum" date="April 1,2022" state="Processed" tableLink="View Paper Work"/>
            <ListItem2 name="Lorem Ipsum" date="April 3,2022" state="Processed" tableLink=" _ "/>
            <ListItem2 name="Lorem Ipsum" date="April 1,2022" state="Processed" tableLink=" _ "/>
            <ListItem2 name="Lorem Ipsum" date="April 4,2022" state="Processed" tableLink="View Paper Work"/>
            <ListItem2 name="Lorem Ipsum" date="April 1,2022" state="Processed" tableLink="_"/>
            <ListItem2 name="Lorem Ipsum" date="April 1,2022" state="Processed" tableLink="View Paper Work"/>
        </table>
        
        </div>
    );
}