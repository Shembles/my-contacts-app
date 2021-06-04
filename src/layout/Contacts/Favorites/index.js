import React, { useRef } from 'react';
import { Icon, Message, Placeholder } from 'semantic-ui-react';
import ImageThumb from '../../../components/ImageThumb';
import "./style.css";

const Favorites = ({ favorites, loading }) => {
    const listRef = useRef(null);

    const showIcons = favorites.length > 2;

    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                top: 0,
                left: 500,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                top: 0,
                left: -500,
                behavior: "smooth",
            });
        }
    };
    return (
        <>
        {!loading && favorites.length === 0 && (<Message content="No Contacts to show yet" />)}
        <div className="slide-container">
            {showIcons && (<Icon className="icon-class" name="caret left" size="huge" onClick={scrollLeft}></Icon>)}
            {favorites.length > 0 && (
                <div className="items-container" ref={listRef}>
                    {Array.isArray(favorites) &&
                        favorites.map((item) => {
                            return (
                                <div key={item.id} className="single-item-container">
                                    <ImageThumb
                                       firstName={item.first_name}
                                       lastName={item.last_name}
                                       src={item.contact_picture}
                                       style={{ width: 75, height: 75 }}
                                    />
                                    <p className="name">
                                        {item.first_name}{" "}
                                        {item.last_name}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
            )}

            {loading && (
                <>
                {" "}
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
                </>
            )}

          {showIcons && (<Icon className="icon-class" name="caret right" size="huge" onClick={scrollRight}></Icon>)}
        </div>
        </>
    );
};

export default Favorites;
