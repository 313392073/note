<template>
	<div>
		<Display></Display>
		<Increment></Increment>
	</div>
</template>
<script>
import Display from './display';
import Increment from './increment';

export default {
	component: {
		Display:Display,
		Increment:Increment
	}
}

</script>
