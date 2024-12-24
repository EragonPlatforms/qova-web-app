const { isPending: creatingUser, mutate: createUser } = useMutation({
    mutationFn: createUserApi,
    onSuccess: ({ user_id: id }) => {
      localStorage.setItem("userId", id);
      localStorage.setItem("userName", name);
      router.push("/chat");
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  export {createUser, creatingUser}