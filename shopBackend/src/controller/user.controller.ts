import User from '../model/user.model';


class UserData {
    constructor() {

    }

    public postUserData(request, response) {
        const { user_Name, email_Id, password, createdAt, updatedAt } = request.body;
        const query = { email_Id: email_Id};
        const foundUser = User.findOne(query);
        foundUser.exec((err, res) => {
            if (err) {
                response.send(err);
            } else {
                if (res) {
                    response.status(403).json({ error: `can not take ${email_Id} twice` });
                } else {
                    const newUser = new User({ user_Name, email_Id, password, createdAt, updatedAt });
                    newUser.save();
                    console.log(newUser);
                    response.status(200).json({ message: `this is ${user_Name}` })

                }
            }
        })
    }
}

export default new UserData();
