import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg}
                            alt="about company"
                            className="img-fluid img-thumbnail"
                            style={{ background: 'var(--darkGrey' }} />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="about us" />
                        <p className="text-lead text-muted my-3">Esse excepteur aliqua dolor consectetur ad esse fugiat et anim nulla ex id reprehenderit. In Lorem sit amet id irure cillum culpa. Fugiat officia id pariatur ipsum mollit magna nostrud dolore incididunt sint nisi. In non sunt eiusmod adipisicing ipsum proident esse aliquip. Duis enim minim dolore est consequat. Deserunt anim laborum nulla laboris incididunt cupidatat ipsum sit dolore anim quis Lorem. Dolore aute magna proident esse laboris irure amet Lorem aliqua.</p>
                        <p className="text-lead text-muted my-3">Esse excepteur aliqua dolor consectetur ad esse fugiat et anim nulla ex id reprehenderit. In Lorem sit amet id irure cillum culpa. Fugiat officia id pariatur ipsum mollit magna nostrud dolore incididunt sint nisi. In non sunt eiusmod adipisicing ipsum proident esse aliquip. Duis enim minim dolore est consequat. Deserunt anim laborum nulla laboris incididunt cupidatat ipsum sit dolore anim quis Lorem. Dolore aute magna proident esse laboris irure amet Lorem aliqua.</p>
                    <button 
                    className="main-link" 
                    type="" 
                    type="button" 
                    style={{marginTop: "2rem"}}>
                        more info
                    </button>
                    </div>
                </div>
            </div>
        </section>
    )
}