import React from 'react'
import './AngeboteDetailsModal.scss';
export default function AngeboteDetailsModal() {
  return (
    <div>
        <div className='abgebote-details-modal-wrapper'>
            <div className='abgebote-details-box'>
                <div className='line'></div>
                <h1>Energieausweis-Basisdaten</h1>
                <div className='modal-form'>
                    <label>Ihre Email-Adresse *</label>
                    <input type="text" placeholder='Email-Adresse *'/>
                </div>
                <div className='modal-form'>
                    <label>Email wiederholen *</label>
                    <input type="text" placeholder='Email-Adresse *'/>
                </div>
                <div className='adresse-text'>
                    <h3>Adresse des Gebäudes</h3>
                    <p>Machen Sie hier Angaben zum Gebäude, für das Sie den Energieausweis erstellen möchten.</p>
                </div>
                <div className='modal-form'>
                    <label>Straße und Hausnummer *</label>
                    <input type="text" placeholder='Straße und Hausnummer *'/>
                </div>
                <div className='modal-form'>
                    <label>Postleitzahl *</label>
                    <input type="text" placeholder='Postleitzahl *'/>
                </div>
                <div className='modal-form'>
                    <label>Ort *</label>
                    <input type="text" placeholder='Ort *'/>
                </div>
                <div className='modal-form'>
                    <label>Bundesland *</label>
                    <input type="text" placeholder='Bundesland *'/>
                </div>
                <button>Jetzt Verbrauchsausweis bestellen</button>
            </div>
        </div>
    </div>
  )
}
