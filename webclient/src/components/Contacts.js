import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contacts extends React.Component {
    translate;
    emptyForm = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    };

    isSubmited = false;

    constructor(props) {
        super(props);
        
        this.state = {
            fields: Object.assign({}, this.emptyForm),
            errors: {}
        };

        this.hasError = this.hasError.bind(this);
        this.getError = this.getError.bind(this);

        this.translate = this.props.content;
    }

    componentDidUpdate() {
        this.checkTranslate();
    }

    render() {
        return (
            <div id="contacts" className="contacts-section">
                <div className="contacts-title">{this.translate.contactsTitle}</div>
                <div className="contacts-content">
                    <div className="address-section">
                        <div className="address-title">{this.translate.addressTitle}</div>
                        <div className="address">{this.translate.addressContent}</div>
                        <div className="address">{this.translate.CEO} <br/>{this.translate.CEOName}</div>
                        <div className="telephone-number">{this.translate.CEOMobilePhoneNumber}</div>
                        <div className="address">{this.translate.logistician} <br/>{this.translate.logisticianName}</div>
                        <div className="telephone-number">{this.translate.logisticianMobilePhoneNumber}</div>
                    </div>
                    <div className="contacts-block ">
                        <form className="contact-form">
                            <input className={"input-field " + (this.state.errors["firstName"] && 'error-input')} type='text' 
                                placeholder={this.translate.firstName} 
                                onChange={this.handleChange.bind(this, "firstName")}
                                value={this.state.fields["firstName"]}/>
                            <div className="error-text">
                                { this.state.errors["firstName"] }
                            </div>
    
                            <input className={"input-field " + (this.state.errors["lastName"] && 'error-input')} type='text' 
                                placeholder={this.translate.lastName} 
                                onChange={this.handleChange.bind(this, "lastName")}
                                value={this.state.fields["lastName"]}/>
                            <div className="error-text">
                                { this.state.errors["lastName"] }
                            </div>
    
                            <input className={"input-field " + (this.state.errors["email"] && 'error-input')} type='email' 
                                placeholder={this.translate.email} 
                                onChange={this.handleChange.bind(this, "email")}
                                value={this.state.fields["email"]}/>
                            <div className="error-text">
                                { this.state.errors["email"] }
                            </div>
    
                            <input className={"input-field " + (this.state.errors["phoneNumber"] && 'error-input')} type='tel' 
                                placeholder={this.translate.phoneNumber} 
                                onChange={this.handleChange.bind(this, "phoneNumber")}
                                value={this.state.fields["phoneNumber"]}/>
                            <div className="error-text">
                                { this.state.errors["phoneNumber"] }
                            </div>
    
                            <textarea className={"input-field message-field " + (this.state.errors["message"] && 'error-input')} placeholder={this.translate.messageTitle}
                                onChange={this.handleChange.bind(this, "message")}
                                value={this.state.fields["message"]}></textarea>
                            <div className="error-text">
                            { this.state.errors["message"] }
                            </div>
    
                            <button className="send-message-button" onClick={this.contactSubmit.bind(this)}>{this.translate.sendLabel}</button>
                        </form>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        )
    }

    hasError(filedName) {
        return this.state.errors?.some(error => error.fieldName === filedName);
    }

    getError(fieldName) {
        return this.state.errors?.filter(error => error.fieldName === fieldName)[0].errorText;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;

        if (this.state.errors[field]) {
            let errors = this.state.errors;

            errors[field] = '';
            this.setState({ errors: errors });
        }
        

        this.setState({ fields });
    }

    checkTranslate() {
        const isTranslateUpdated = this.translate && this.translate !== this.props.content;

        this.translate = this.props.content;

        if (isTranslateUpdated) {
            this.handleValidation();
        }
    }

    contactSubmit(e) {
        e.preventDefault();

        this.isSubmited = true;

        if (this.handleValidation() && window.Email) {
            const config = {
                SecureToken: process.env.REACT_APP_SECURE_TOKEN,
                To: process.env.REACT_APP_EMAIL,
                From: process.env.REACT_APP_EMAIL,
                Subject : "Повідомлення від https://eden-2012.github.io/home/",
                Body : `
                    <p>${this.state.fields.message}</p>
                    <br/>
                    <br/>
                    <b>Ім'я: ${this.state.fields.firstName} ${this.state.fields.lastName}</b> 
                    <br/>
                    <b>Пошта: ${this.state.fields.email}</b>
                    <br/>
                    <b>Моб. телефон: ${this.state.fields.phoneNumber}</b>`
            };

            window.Email.send(config).then((e) => {
                toast.success(this.translate.emailSentSuccess, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });

                this.setState({
                    fields: Object.assign({}, this.emptyForm)
                });
            }).catch(error => {
                toast.error(this.translate.emailSentError, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored"
                });

                console.error(error);
            })
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        const firstNameError = this.validateName(fields, "firstName");

        if (firstNameError) {
            formIsValid = false;
            errors["firstName"] = firstNameError;
        }

        const lastNameError = this.validateName(fields, "lastName");

        if (lastNameError) {
            formIsValid = false;
            errors["lastName"] = lastNameError;
        }
    
        const emailError = this.validateEmail(fields);

        if (emailError) {
            formIsValid = false;
            errors["email"] = emailError;
        }

        const phoneNumberError = this.validatePhoneNumber(fields);

        if (phoneNumberError) {
            formIsValid = false;
            errors["phoneNumber"] = phoneNumberError;
        }

        const messageError = this.validateMessage(fields);

        if (messageError) {
            formIsValid = false;
            errors["message"] = messageError;
        }
    
        this.setState({ errors: this.isSubmited ? errors : {} });
    
        return formIsValid;
    }

    validateMessage(fields) {
        if (!fields["message"]) {
            return this.translate.requiredFieldError;
        }
      
        if (typeof fields["message"] !== "undefined") {
            if (fields["message"].length > 4000) {
                return this.translate.messageMaxLengthError;
            }
        }
    }

    validatePhoneNumber(fields) {
        if (!fields["phoneNumber"]) {
            return this.translate.requiredFieldError;
        }
      
        if (typeof fields["phoneNumber"] !== "undefined") {
            if (!fields["phoneNumber"].match(/^[0-9]+$/)) {
                return this.translate.wrongPhoneNumberError;
            }

            if (fields["phoneNumber"].length !== 12) {
                return this.translate.phoneLengthError;
            }
        }

        return null;
    }

    validateName(fields, fieldName) {
        if (!fields[fieldName]) {
            return this.translate.requiredFieldError;
        }
      
        if (typeof fields[fieldName] !== "undefined") {
            if (!fields[fieldName].trim().match(/^[a-zA-Zа-яА-Я ]+$/)) {
                return this.translate.onlyLetttersError;
            }

            if (fields[fieldName].length < 2) {
                return this.translate.textFieldMinLengthError;
            }
        }

        return null;
    }

    validateEmail(fields) {
        if (!fields["email"]) {
            return this.translate.requiredFieldError;
        }
      
        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");
      
            if (
              !(
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                fields["email"].indexOf("@@") === -1 &&
                lastDotPos > 2 &&
                fields["email"].length - lastDotPos > 2
              )
            ) {
                return this.translate.wrongEmailError;
            }
        }
    }
}

export default Contacts;