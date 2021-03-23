---
order: 4
---

# User interface

Once you navigate to the UI, the following `vue` UI at `localhost:8080` - 

![](./userinterface.png)

After using the mnemonic from the output of `starport serve`, you can use this UI to perform `create` and `list` operations for your blog application's `post` and `comment` types.

### Inspect the Frontend

Open the file at `vue/src/views/Index.vue`.

To see a form for creating `post` items in your app add a `<sp-type-form/>` component:

```vue
  <div class="sp-container">
    <!-- sp-sign-in, sp-bank-balances, etc. -->
    <sp-type-form path="example.blog.blog" type="post" :fields="[ ['creator', 1, 'string'] , ['title', 2, 'string'] , ['body', 3, 'string'] ]" />
  </div>
```

Learn more about available components and cosmos logic that you can use on your `vue` frontend, visit the `@tendermint/vue` library at [github.com/tendermint/vue](https://github.com/tendermint/vue)

🎉 Congratulations, you have created a blockchain with a blog feature. 

To continue, learn more about [Starport](https://github.com/tendermint/starport/tree/develop/docs) or [Continue with another tutorial](https://tutorials.cosmos.network/).