import { defineComponent, reactive, ref } from "vue";
import API from '@aws-amplify/api';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { onCreateTodo } from './graphql/subscriptions';

export default defineComponent ({
  name: 'App',
  components: {},
  setup() {
    const data = reactive({
      name: ref(''),
      description: ref('')
    });
    const todos = ref([]);

    /* methods */
    const createTodoItem = async () => {
      const { name, description } = data;
      if (!name || !description) return;
      const todo = { name, description };
      todos.value = [...todos.value, todo];
      await API.graphql({
        query: createTodo,
        variables: {input: todo},
      });
      data.name = '';
      data.description = '';
    };

    const getTodoList = async () => {
      const todoList = await API.graphql({
        query: listTodos
      });
      todos.value = todoList.data.listTodos.items;
    };

    const subscribe = () => {
      API.graphql({ query: onCreateTodo })
        .subscribe({
          next: (eventData) => {
            let todo = eventData.value.data.onCreateTodo;
            if (todos.value.some(item => item.name === todo.name)) return; // remove duplications
            todos.value = [...todos.value, todo];
          }
        });
    }

    /* life cycle */
    // on created, hook 'created' is deprecated
    getTodoList();
    subscribe();

    return {
      data,
      todos,
      createTodoItem
    }
  }
});