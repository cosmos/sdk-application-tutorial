module.exports = {
  theme: "cosmos",
  title: "Cosmos SDK Tutorials",
  themeConfig: {
    repo: "cosmos/sdk-tutorials",
    docsRepo: "cosmos/sdk-tutorials",
    editLinks: true,
    label: "sdk",
    topbar: {
      banner: false,
    },
    sidebar: {
      auto: false,
      nav: [
        {
          title: "Tutorials",
          children: [
            {
              title: "Starport Polling App",
              path: "/starport-polling-app/",
              directory: true,
            },
            {
              title: "Starport Blog",
              path: "/starport-blog/",
              directory: true,
            },
            {
              title: "Scavenge",
              path: "/scavenge/tutorial/",
              directory: true,
            },
            {
              title: "Nameservice",
              path: "/nameservice/tutorial/",
              directory: true,
            },
            {
              title: "Cosmos Burner Chain",
              path: "/burner-chain/",
              directory: true,
            },
          ],
        },
      ],
    },
    gutter: {
      title: "Help & Support",
      editLink: true,
      chat: {
        title: "Discord",
        text: "Chat with Cosmos developers on Discord.",
        url: "https://discordapp.com/channels/669268347736686612",
        bg: "linear-gradient(225.11deg, #2E3148 0%, #161931 95.68%)"
      },
      forum: {
        title: "Cosmos SDK Forum",
        text: "Join the SDK Developer Forum to learn more.",
        url: "https://forum.cosmos.network/",
        bg: "linear-gradient(225deg, #46509F -1.08%, #2F3564 95.88%)",
        logo: "cosmos"
      },
      github: {
        title: "Found an Issue?",
        text: "Help us improve this page by suggesting edits on GitHub."
      }
    },
    footer: {
      question: {
        text:
          "Chat with Cosmos developers in <a href='https://discord.gg/W8trcGV' target='_blank'>Discord</a> or reach out on the <a href='https://forum.cosmos.network/c/cosmos-sdk' target='_blank'>SDK Developer Forum</a> to learn more.",
      },
      logo: "/logo-bw.svg",
      textLink: {
        text: "cosmos.network",
        url: "https://cosmos.network",
      },
      services: [
        {
          service: "medium",
          url: "https://blog.cosmos.network/",
        },
        {
          service: "twitter",
          url: "https://twitter.com/cosmos",
        },
        {
          service: "linkedin",
          url: "https://www.linkedin.com/company/tendermint/",
        },
        {
          service: "reddit",
          url: "https://reddit.com/r/cosmosnetwork",
        },
        {
          service: "telegram",
          url: "https://t.me/cosmosproject",
        },
        {
          service: "youtube",
          url: "https://www.youtube.com/c/CosmosProject",
        },
      ],
      smallprint:
        "This website is maintained by Tendermint Inc. The contents and opinions of this website are those of Tendermint Inc.",
      links: [
        {
          title: "Documentation",
          children: [
            {
              title: "Cosmos SDK",
              url: "https://docs.cosmos.network"
            },
            {
              title: "Cosmos Hub",
              url: "https://hub.cosmos.network"
            },
            {
              title: "Tendermint Core",
              url: "https://docs.tendermint.com"
            }
          ]
        },
        {
          title: "Community",
          children: [
            {
              title: "Cosmos blog",
              url: "https://blog.cosmos.network"
            },
            {
              title: "Forum",
              url: "https://forum.cosmos.network"
            },
            {
              title: "Chat",
              url: "https://discord.gg/W8trcGV"
            }
          ]
        },
        {
          title: "Contributing",
          children: [
            {
              title: "Contributing to the docs",
              url:
                "https://github.com/cosmos/cosmos-sdk/blob/master/docs/DOCS_README.md"
            },
            {
              title: "Source code on GitHub",
              url: "https://github.com/cosmos/cosmos-sdk/"
            }
          ]
        }
      ]
    },
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-51029217-13",
      },
    ],
  ],
};
