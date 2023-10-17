import React, { forwardRef, useState } from "react";
import "./AngeboteDetailsModal.scss";
// Adjust the path accordingly

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AngeboteDetailsModal = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, onClose }, ref) => {
    const [formData, setFormData] = useState({
      email: "",
      repeatEmail: "",
      street: "",
      postalCode: "",
      city: "",
      state: "",
    });

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (
        e.target instanceof HTMLElement &&
        e.target.classList.contains("abgebote-details-modal-wrapper")
      ) {
        onClose();
      }
    };

    if (!isOpen) return null;

    return (
      <div
        onClick={handleOutsideClick}
        className="abgebote-details-modal-wrapper"
      >
        <div className="abgebote-details-box">
          <div className="line"></div>
          <h1>Energieausweis-Basisdaten</h1>
          <div className="modal-form">
            <label>Ihre Email-Adresse *</label>
            <input
              type="email"
              name="email"
              placeholder="Email-Adresse *"
              value={formData.email}
            />
          </div>
          <div className="modal-form">
            <label>Email wiederholen *</label>
            <input
              type="email"
              name="repeatEmail"
              placeholder="Email-Adresse *"
              value={formData.repeatEmail}
            />
          </div>
          <div className="adresse-text">
            <h3>Adresse des Gebäudes</h3>
            <p>
              Machen Sie hier Angaben zum Gebäude, für das Sie den
              Energieausweis erstellen möchten.
            </p>
          </div>
          <div className="modal-form">
            <label>Straße und Hausnummer *</label>
            <input
              type="text"
              name="street"
              placeholder="Straße und Hausnummer *"
              value={formData.street}
            />
          </div>
          <div className="modal-form">
            <label>Postleitzahl *</label>
            <input
              type="text"
              name="postalCode"
              placeholder="Postleitzahl *"
              value={formData.postalCode}
            />
          </div>
          <div className="modal-form">
            <label>Ort *</label>
            <input
              type="text"
              name="city"
              placeholder="Ort *"
              value={formData.city}
            />
          </div>
          <div className="modal-form">
            <label>Bundesland *</label>
            <input
              type="text"
              name="state"
              placeholder="Bundesland *"
              value={formData.state}
            />
          </div>
          <button>Jetzt Verbrauchsausweis bestellen</button>
        </div>
      </div>
    );
  }
);

export default AngeboteDetailsModal;
