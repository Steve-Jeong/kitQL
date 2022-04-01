<script lang='ts'>
  import { GetContinentsQuery } from "$lib/graphql/_kitql/graphqlTypes";
  import { onMount } from "svelte";

  onMount(async() => {
    await GetContinentsQuery()
  })
</script>


<h1>Welcome to kit QL</h1>

