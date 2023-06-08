export const emailBody = ({name, phone, email, message}: {
    name: string,
    phone: string,
    email: string,
    message?: string
}) => {
    return`
        <div>
            Новий клієнт залишив повідомлення
            <br/>
            <div>
                <b>Ім'я </b>: ${name}
                <br/>
                <b>Телефон </b>: ${phone}
                <br/>
                <b>Email </b>: ${email}
                <br/>
                <b>Повідомлення </b>: ${message}
            </div>
        </div>`

}