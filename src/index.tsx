import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { getBooks } from "./repository";
import { Book } from "./repository/protocols/book";

export function Main() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  async function loadBooks(newPage: number) {
    const itens = await getBooks("hooked", newPage);
    setBooks((oldValue) => [...oldValue, ...itens]);
  }

  return (
    <View
      style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}
    >
      <FlatList
        keyExtractor={({ id }) => String(id)}
        data={books}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.imageLinks?.thumbnail }}
            style={{
              width: 105,
              height: 153,
              paddingHorizontal: 8.5,
            }}
          />
        )}
      />
      <TouchableOpacity
        style={{ padding: 30 }}
        onPress={async () => {
          setLoading(true);
          setPage(page + 1);
          await loadBooks(page);
          setLoading(false);
        }}
      >
        <Text>{page}</Text>
      </TouchableOpacity>
    </View>
  );
}
