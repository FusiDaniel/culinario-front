import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

type AiTestResponse = {
  foundIngredients: string[];
  model: string;
  notFoundIngredients: string[];
};

export const useAiTest = () => {
  const [model, setModel] = useState('gemma3');
  const [text, setText] = useState('');
  const [foundIngredients, setFoundIngredients] = useState<string[]>([]);
  const [notFoundIngredients, setNotFoundIngredients] = useState<string[]>([]);

  const handleAddingredients = (ingredients: string[], type: 'found' | 'notFound') => {
    const uniqueIngredients = ingredients.filter((ingredient) => {
      if (type === 'found')
        return !foundIngredients.includes(ingredient);
      return !notFoundIngredients.includes(ingredient);
    },
    );
    if (type === 'found') {
      setFoundIngredients(prev => [...prev, ...uniqueIngredients]);
    }
    if (type === 'notFound') {
      setNotFoundIngredients(prev => [...prev, ...uniqueIngredients]);
    }
  };

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post<AiTestResponse>(
        'http://localhost:3333/speech-to-ingredients-list',
        { text },
        { params: { model } },
      );
      return data;
    },
    onSuccess: ({ foundIngredients, notFoundIngredients }) => {
      handleAddingredients(foundIngredients, 'found');
      handleAddingredients(notFoundIngredients, 'notFound');
      setText('');
    },
  });

  const reset = () => {
    setFoundIngredients([]);
    setNotFoundIngredients([]);
  };

  return {
    disableSendButton: !text.trim(),
    foundIngredients,
    isPending,
    model,
    mutate,
    notFoundIngredients,
    reset,
    setModel,
    setText,
    text,
  };
};
