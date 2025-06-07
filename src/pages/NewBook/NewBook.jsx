import React from "react";
import { NewBookData } from "../../database/NewBookData";
import './newBook.css'

export default function NewBook(){
    return(
        <div>
            {NewBookData.map(item=>(<div key="item.id">
                <div className="book-layout">
                <div className="book-img">
                    <img src = {item.bookImg} alt = {item.bookName} />
                </div>
                
                <div className="book-info">
                    <p className="book-title">- {item.bookName}</p>
                    <br />
                    <br />
                    <p>{item.writer}</p>
                    <br />
                    <p className="book-price">{item.export}</p>
                    <br />
                    <p className="book-price">가격 : {item.price}</p>
                    <br />
                    <br />
                    <p className="book-explain">{item.explain}</p>
                </div>
                </div>
            </div>))}
        </div>
    );

}