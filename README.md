Dear community,

After 8 years of working on this project, we had to make the difficult decision to close Jovo.

What this means for you:
- All Jovo packages will stay on npm in their current versions, so you can keep using them in your projects.
- We will archive the Jovo organization on GitHub. This means that all repositories will be read-only. If community members want to make changes, they are invited to fork the repositories and publish packages under their organization.
- We shut down our free Debugger service at the end of November 2024. However, we just open sourced it: https://github.com/jovotech/jovo-webhook-debugger (alternatively, people can use [ngrok](https://ngrok.com/) or one of our web chat widgets for local testing).
- We shut down the Jovo website, but you can still access the documentation in the open source repositories, for example [here](./docs/).

Thank you to everyone who was part of this community and who participated in creating Jovo!
It was really great to meet so many of you over all these years and we're really happy that we've been able to work on an open source project for such a long time.
We won't forget all the cool skills, actions, bots and apps that were created using Jovo, all the office hours, conferences, testing tuesdays... It was an honor!

Thank you,
Alex and Jan

---

# Jovo Framework: The React for Voice and Chat Apps

![Jovo Framework](https://www.jovo.tech/img/github-header.png)

<p>
<a href="https://github.com/jovotech/jovo-v4-template" target="_blank">Template</a> - <a href="https://github.com/jovotech/jovo-cli" target="_blank">CLI</a> - <a href="https://github.com/jovotech/jovo-inbox" target="_blank">Inbox</a>  
</p>

<p>
<a href="https://www.npmjs.com/package/@jovotech/framework" target="_blank"><img src="https://badge.fury.io/js/@jovotech%2Fframework.svg"></a>      
</p>

Build conversational and multimodal experiences for the web, Alexa, Google Assistant, Messenger, Instagram, Google Business Messages, mobile apps, and more. Fully customizable and open source. Works with TypeScript and JavaScript.

```typescript
@Component()
export class LoveHatePizzaComponent extends BaseComponent {
  START() {
    return this.$send(YesNoOutput, { message: 'Do you like pizza?' });
  }

  @Intents(['YesIntent'])
  lovesPizza() {
    return this.$send({ message: 'Yes! I love pizza, too.', listen: false });
  }

  @Intents(['NoIntent'])
  hatesPizza() {
    return this.$send({ message: `That's OK! Not everyone likes pizza.`, listen: false });
  }
}
```

- **Cross-platform**: Works on the [web](./platforms/platform-web/), voice platforms like [Alexa](./platforms//platform-alexa) and [Google Assistant](./platforms//platform-googleassistant), and chat platforms like [Facebook Messenger](./platforms//platform-facebookmessenger), [Instagram](./platforms//platform-instagram), and [Google Business Messages](./platforms//platform-googlebusiness).
- **Fast**: A [CLI](https://github.com/jovotech/jovo-cli), local development, and browser-based debugging using the [Jovo Debugger](./integrations/plugin-debugger/docs/README.md).
- **Component-based**: Build robust experiences based on reusable components.
- **Multimodal**: An [output template](./docs/output-templates.md) engine that translates structured content into voice, text, and visual responses.
- **Extensible**: Build [Framework plugins](./docs/plugins.md), [CLI plugins](https://github.com/jovotech/jovo-cli/blob/v4/latest/docs/cli-plugins.md), and leverage many integrations from the [Jovo Marketplace](https://www.jovo.tech/marketplace).
- **Integrated**: Works with many [NLU](./docs/nlu.md) and [CMS](./docs/cms.md) services.
- **Robust**: Includes [staging](./docs/staging.md) and a [unit testing suite](./docs/unit-testing.md).

## Getting Started

> Learn more in our [Getting Started Guide](./docs/README.md).

Install the Jovo CLI:

```sh
$ npm install -g @jovotech/cli
```

Create a new Jovo project ([find the v4 template here](https://github.com/jovotech/jovo-v4-template)):

```sh
$ jovo new <directory>
```

Go into project directory and run the Jovo development server:

```sh
# Go into project directory (replace <directory> with your folder)
$ cd <directory>

# Run local development server (default: port 3000)
$ npm run start:dev

# Since the discontinuation of the hosted Jovo Debugger, use a service like ngrok for local development with a public webhook URL
$ ngrok http 3000

# Example result: https://<ngrok-id>.ngrok-free.app/webhook 
```
