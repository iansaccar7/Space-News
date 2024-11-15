import React from "react";
import "./style.css"


export class Article extends React.Component {
    render() {
        return(
            <article id="article">
                <img id="Img" src= {this.props.thumbnail} alt = {this.props.title} />

                <div className="articles-infos">
                <h2>
                    {this.props.title}
                </h2>

                
                <h3>
                    {this.props.provider}
                </h3>

                <p>
                    {this.props.description}
                </p>
                
                </div>
            </article>
        )
    }
}

export default Article