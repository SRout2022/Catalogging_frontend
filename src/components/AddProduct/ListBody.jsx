import React from "react";
import ListItem from "./ListItem";


export default function ListBody()
{
    return (
        <table id="list-Table" class="table">
            <thead class="shadow p-3 mb-5 bg-white rounded ">
                <tr>
                    <th scope="col" id="list-first-item"><div class="addProduct-navbar-col">ID <i class="fa-solid fa-sort-down"></i> </div></th>
                    <th scope="col"><div class="addProduct-navbar-col">Image</div></th>
                    <th scope="col"><div class="addProduct-navbar-col">Price <i class="fa-solid fa-sort-down"></i> </div></th>
                    <th scope="col"><div class="addProduct-navbar-col">Shape</div></th>
                    <th scope="col"><div class="addProduct-navbar-col">Color</div></th>
                    <th scope="col"><div class="addProduct-navbar-col">Size</div></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <ListItem id="EL-012" img="https://images.pexels.com/photos/8980243/pexels-photo-8980243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" price="5000" shape="Text" color="Text" size="Text"/>
            <ListItem id="EL-012" img="https://images.pexels.com/photos/8980243/pexels-photo-8980243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" price="5000" shape="Text" color="Text" size="Text"/>
            <ListItem id="EL-012" img="https://images.pexels.com/photos/8980243/pexels-photo-8980243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" price="5000" shape="Text" color="Text" size="Text"/>
            <ListItem id="EL-012" img="https://media.istockphoto.com/photos/happy-african-american-woman-smiling-elegant-girl-party-style-mini-picture-id1338764011?b=1&k=20&m=1338764011&s=170667a&w=0&h=wPxzeDc4YN02ue51pv0s_jMe61AcNLXR80ofAosOlVw=" price="5000" shape="Text" color="Text" size="Text"/>
            <ListItem id="EL-012" img="https://media.istockphoto.com/photos/happy-african-american-woman-smiling-elegant-girl-party-style-mini-picture-id1338764011?b=1&k=20&m=1338764011&s=170667a&w=0&h=wPxzeDc4YN02ue51pv0s_jMe61AcNLXR80ofAosOlVw=" price="5000" shape="Text" color="Text" size="Text"/>
            <ListItem id="EL-012" img="https://images.pexels.com/photos/8980243/pexels-photo-8980243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" price="5000" shape="Text" color="Text" size="Text"/>
            <ListItem id="EL-012" img="https://images.pexels.com/photos/8980243/pexels-photo-8980243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" price="5000" shape="Text" color="Text" size="Text"/>
            <ListItem id="EL-012" img="https://media.istockphoto.com/photos/happy-african-american-woman-smiling-elegant-girl-party-style-mini-picture-id1338764011?b=1&k=20&m=1338764011&s=170667a&w=0&h=wPxzeDc4YN02ue51pv0s_jMe61AcNLXR80ofAosOlVw=" price="5000" shape="Text" color="Text" size="Text"/>
            <ListItem id="EL-012" img="https://images.pexels.com/photos/8980243/pexels-photo-8980243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" price="5000" shape="Text" color="Text" size="Text"/>
            <ListItem id="EL-012" img="https://images.pexels.com/photos/8980243/pexels-photo-8980243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" price="5000" shape="Text" color="Text" size="Text"/>
            
        </table>
    );
}