import request from "supertest";
import app from "../../app";

describe("api/users", () => {

  test("GET /users?since={number} - should be able to list GitHub users", async () => {
    const response1 = await request(app).get(`/api/users`);

    expect(response1.status).toBe(200);
    expect(response1.body).toHaveProperty("link");
    expect(response1.body).toHaveProperty("users");

    const response2 = await request(app).get(`/api/users?since=46`);

    expect(response2.status).toBe(200);
    expect(response2.body).toHaveProperty("link");
    expect(response2.body).toHaveProperty("users");
  });

	test("GET '/users/:username/details' - should be able to show details from a specific user", async () => {
    const listUsers = await request(app).get(`/api/users?since=46`);
		const response = await request(app).get(`/api/users/${listUsers.body.users[0].login}/details`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("login");
    expect(response.body).toHaveProperty("id");
  });

	test("GET '/users/:username/repos' - should be able to show details from a specific user", async () => {
    const listUsers = await request(app).get(`/api/users?since=91`);
		const response = await request(app).get(`/api/users/${listUsers.body.users[0].login}/repos`);
		
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("id");
  });

});
