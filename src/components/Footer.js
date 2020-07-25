import React from 'react';
import './styles/Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
            <div className="footer_container row">

            <div className="contact_container col-sm">
            <h3>CONTACT</h3>
                <div className="col">
                    <div className="contact_item row-sm">
                        <i className="icon-location"></i> Av. Cipres 010122 Colonia Juarez Tamaulipas
                    </div>
                    <div className="contact_item row-sm">
                        <i className="icon-phone"></i> +552554010203
                    </div>
                    <div className="contact_item row-sm">
                        <i className="icon-envelop"></i> dulcecaramelo@dental.com
                    </div>
                    <div className="contact_item row-sm">
                        Siguenos en
                    </div>
                    <div className="row">
                        <div className="col-sm contact_socialmedia">
                            <a href="" className="social-link icon-facebook"></a>
                            <a href="" className="social-link icon-instagram"></a>
                            <a href="" className="social-link icon-whatsapp"></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="schedule_container col-sm">
            <h3>HORARIO DE CITAS</h3>
            <div className="col">
                    <div className="contact_item row-sm">
                        <span className="icon-calendar"></span> Lunes: 11:00 - 14:00
                    </div>
                    <div className="contact_item row-sm">
                        <i className="icon-calendar"></i> Martes: 11:00 - 13:00
                    </div>
                    <div className="contact_item row-sm">
                        <i className="icon-calendar"></i> Miercoles: 07:00 - 21:00
                    </div>
                    <div className="contact_item row-sm">
                        <i className="icon-calendar"></i> Jueves: 09:00 - 14:00
                    </div>
                    <div className="contact_item row-sm">
                        <i className="icon-calendar"></i> Viernes: 07:00 - 21:00
                    </div>
                    <div className="contact_item row-sm">
                        <i className="icon-calendar"></i> Sabado: 09:00 - 14:00
                    </div>
                </div>
            </div>
            </div>

            </div>
        );
    }
}

export default Footer;