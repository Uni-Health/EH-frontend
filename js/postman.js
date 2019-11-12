const server = "http://localhost:8000";

export class Postman {
  static async login(phone, password, role) {
    const body = {
      phone: phone,
      password: password,
      role: role
    };

    return await Postman._post(body, '/register');
  }

  static async register(username, phone, password, role) {
    const body = {
      username: username,
      phone: phone,
      password: password,
      role: role
    };

    return await Postman._post(body, '/register');
  }

  static async _post(body, path) {
    const response = await fetch(server + path, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    });

    return await response.json();
  }
}
