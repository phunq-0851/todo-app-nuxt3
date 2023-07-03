<template>
  <h1>TODO APP</h1>
  
  <div class="flex justify-between w-full">
    <el-form
        label-width="100px"
        :model="form"
        class="w-1/3"
    >
        <el-form-item label="ID">
        	<el-input v-model="form.id" />
        </el-form-item>
        <el-form-item label="Title">
        	<el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="Author">
        <el-input v-model="form.author" />
        	</el-form-item>
        <el-form-item>
        	<el-button type="primary" @click="submitForm">Submit</el-button>
        </el-form-item>
    </el-form>

		<div>
			<el-table :data="posts" style="width: 100%" class="w-2/3">
				<el-table-column label="ID" width="180">
					<template #default="scope">
						<el-popover effect="light" trigger="hover" placement="top" width="auto">
							<template #default>
								<div>ID: {{ scope.row.id }}</div>
							</template>
						</el-popover>
						<div>{{ scope.row.id }}</div>
					</template>
				</el-table-column>
				<el-table-column label="Title" width="180" prop="title" />
				<el-table-column label="Author" width="180" prop="author" />
				<el-table-column label="Action" width="180">
					<template #default="scope">
						<el-button 
							size="small" 
							@click="handleEdit(scope.$index, scope.row)"
						>
							Edit
						</el-button>
						<el-button
							size="small"
							type="danger"
							@click="handleDelete(scope.row)"
						>
							Delete
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script setup>
import usePost from '~/composables/posts'

const post = usePost()

const form = reactive({
  id: '',
  title: '',
  author: '',
})

const data = ref([])

const submitForm = () => {
  posts.value.push({
		id: form.id,
		title: form.title,
		author: form.author
	})

	form.id = ''
	form.title = ''
	form.author = ''
}

const handleDelete = (row) => {
	const data = posts.value.filter(post => post.id !== row.id)

	posts.value = data
}
</script>
