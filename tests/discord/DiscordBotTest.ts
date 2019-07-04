import {DiscordClient} from "../../src/wrappers/discord/DiscordClient";

const {DiscordBot} = require("../../src/DiscordBot");
const Discord = require("discord.js");
const assert = require("assert");
const token = process.env.TRAVIS ? process.env.TRAVIS : require("../../../tests/bot-config").token.discord;

beforeEach(function() {
	this.client = new Discord.Client();
});

afterEach(function() {
	this.client = null;
});

describe("The bot initialisation", function() {
	it("Has a user which is not yet defined", function() {
		//Act
		new DiscordBot(token);

		//Assert
		assert.strictEqual(this.client.user, null, "The user is not yet defined.");
	});
});

describe("The getter", function() {
	it("Has a getter which returns the wrapped client object", function() {
		//Act
		let Bot = new DiscordBot(token);

		//Assert
		assert.strictEqual(Bot.client instanceof DiscordClient, true, "The wrapped client object was returned.");
	});
});
