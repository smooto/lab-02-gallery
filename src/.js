import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <>
                <main>
                    <section>
                    <p>Filter by number of horns:</p>
                    <select>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    <ul>
                        <li className="card-wrapper">
                        <img className="card-img" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns" />
                        <p className="card-title">UniWhal</p>
                        <p className="card-description">A unicorn and a narwhal nuzzling their horns</p>
                        </li>
                        <li className="card-wrapper">
                        <img className="card-img" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns" />
                        <p className="card-title">UniWhal</p>
                        <p className="card-description">A unicorn and a narwhal nuzzling their horns</p>
                        </li>
                        <li className="card-wrapper">
                        <img className="card-img" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns" />
                        <p className="card-title">UniWhal</p>
                        <p className="card-description">A unicorn and a narwhal nuzzling their horns</p>
                        </li>
                    </ul>
                    </section>
                </main>
            </>
        )
    }
}
