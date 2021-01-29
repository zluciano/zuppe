import Vue from 'vue'

var logged_user = null;

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(password){
            logged_user = {
                username: username,
                first_name: 'Mark',
                last_name: 'Zuckerberg',
                email: 'zuck@facebook.com',
                notifications_enabled: true,
                permissions:{
                    ADMIN: username == 'admin',
                    STAFF: username == 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    logout(){
        logged_user = null;
        return mockasync({});
    },
    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    add_todo(newtask){
        return mockasync({description: newtask, done: false});
    },
    list_groceries(){
        return mockasync({
            groceries: [
                {name: 'Banana', quantity: 5, type: 'unidade(s)', done: true},
                {name: 'Arroz', quantity: 2, type: 'Kg', done: false}
            ]
        });
    },
    list_meals(day){
        var date = new Date(day)
        console.log(date.toLocaleString())
        return mockasync({
            data: [
                {
                    date: '25/01/2021',
                    meal_list: [
                        {
                            name: 'Café da manhã',
                            recipe: {
                                name: 'Pão com ovo',
                                description: 'Pão de forma ou francês com ovo frito ou mexido.',
                                image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pao-com-ovo-1.jpg',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    },
                                    {
                                        name: 'Pão',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Almoço',
                            recipe: {
                                name: 'Arroz com ovo',
                                description: 'Arroz branco feito com alho e óleo acompanado de ovo frito ou mexido.',
                                image: 'https://portal-amb-imgs.clubedaana.com.br/2019/05/arroz-com-ovo-da-Ana-Maria-1024x1019.jpg',
                                ingredients: [
                                    {
                                        name: 'Arroz',
                                        quantity: 0.2,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Lanche',
                            recipe: {
                                name: 'Ovo frito',
                                description: 'Ovo frito na frigideira.',
                                image: 'https://img.cybercook.com.br/foodiefeed/ea6w6xshxpw00fdewn2sbphcimdlnrxp2vnfpdf2-623x350.jpeg?w=623&fit=crop',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Jantar',
                            recipe: {
                                name: 'Farofa de ovo',
                                description: 'Farofa preparada à base de farinha de trigo e ovo.',
                                image: 'https://ovo.blog.br/wp-content/uploads/2019/08/Farofa-de-ovo-1-900x556.jpg',
                                ingredients: [
                                    {
                                        name: 'Farinha',
                                        quantity: 0.3,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    date: '26/01/2021',
                    meal_list: [
                        {
                            name: 'Café da manhã',
                            recipe: {
                                name: 'Pão com ovo',
                                description: 'Pão de forma ou francês com ovo frito ou mexido.',
                                image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pao-com-ovo-1.jpg',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    },
                                    {
                                        name: 'Pão',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Almoço',
                            recipe: {
                                name: 'Arroz com ovo',
                                description: 'Arroz branco feito com alho e óleo acompanado de ovo frito ou mexido.',
                                image: 'https://portal-amb-imgs.clubedaana.com.br/2019/05/arroz-com-ovo-da-Ana-Maria-1024x1019.jpg',
                                ingredients: [
                                    {
                                        name: 'Arroz',
                                        quantity: 0.2,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Lanche',
                            recipe: {
                                name: 'Ovo frito',
                                description: 'Ovo frito na frigideira.',
                                image: 'https://img.cybercook.com.br/foodiefeed/ea6w6xshxpw00fdewn2sbphcimdlnrxp2vnfpdf2-623x350.jpeg?w=623&fit=crop',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Jantar',
                            recipe: {
                                name: 'Farofa de ovo',
                                description: 'Farofa preparada à base de farinha de trigo e ovo.',
                                image: 'https://ovo.blog.br/wp-content/uploads/2019/08/Farofa-de-ovo-1-900x556.jpg',
                                ingredients: [
                                    {
                                        name: 'Farinha',
                                        quantity: 0.3,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    date: '27/01/2021',
                    meal_list: [
                        {
                            name: 'Café da manhã',
                            recipe: {
                                name: 'Pão com ovo',
                                description: 'Pão de forma ou francês com ovo frito ou mexido.',
                                image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pao-com-ovo-1.jpg',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    },
                                    {
                                        name: 'Pão',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Almoço',
                            recipe: {
                                name: 'Arroz com ovo',
                                description: 'Arroz branco feito com alho e óleo acompanado de ovo frito ou mexido.',
                                image: 'https://portal-amb-imgs.clubedaana.com.br/2019/05/arroz-com-ovo-da-Ana-Maria-1024x1019.jpg',
                                ingredients: [
                                    {
                                        name: 'Arroz',
                                        quantity: 0.2,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Lanche',
                            recipe: {
                                name: 'Ovo frito',
                                description: 'Ovo frito na frigideira.',
                                image: 'https://img.cybercook.com.br/foodiefeed/ea6w6xshxpw00fdewn2sbphcimdlnrxp2vnfpdf2-623x350.jpeg?w=623&fit=crop',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Jantar',
                            recipe: {
                                name: 'Farofa de ovo',
                                description: 'Farofa preparada à base de farinha de trigo e ovo.',
                                image: 'https://ovo.blog.br/wp-content/uploads/2019/08/Farofa-de-ovo-1-900x556.jpg',
                                ingredients: [
                                    {
                                        name: 'Farinha',
                                        quantity: 0.3,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    date: '28/01/2021',
                    meal_list: [
                        {
                            name: 'Café da manhã',
                            recipe: {
                                name: 'Pão com ovo',
                                description: 'Pão de forma ou francês com ovo frito ou mexido.',
                                image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pao-com-ovo-1.jpg',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    },
                                    {
                                        name: 'Pão',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Almoço',
                            recipe: {
                                name: 'Arroz com ovo',
                                description: 'Arroz branco feito com alho e óleo acompanado de ovo frito ou mexido.',
                                image: 'https://portal-amb-imgs.clubedaana.com.br/2019/05/arroz-com-ovo-da-Ana-Maria-1024x1019.jpg',
                                ingredients: [
                                    {
                                        name: 'Arroz',
                                        quantity: 0.2,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Lanche',
                            recipe: {
                                name: 'Ovo frito',
                                description: 'Ovo frito na frigideira.',
                                image: 'https://img.cybercook.com.br/foodiefeed/ea6w6xshxpw00fdewn2sbphcimdlnrxp2vnfpdf2-623x350.jpeg?w=623&fit=crop',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Jantar',
                            recipe: {
                                name: 'Farofa de ovo',
                                description: 'Farofa preparada à base de farinha de trigo e ovo.',
                                image: 'https://ovo.blog.br/wp-content/uploads/2019/08/Farofa-de-ovo-1-900x556.jpg',
                                ingredients: [
                                    {
                                        name: 'Farinha',
                                        quantity: 0.3,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    date: '29/01/2021',
                    meal_list: [
                        {
                            name: 'Café da manhã',
                            recipe: {
                                name: 'Pão com ovo',
                                description: 'Pão de forma ou francês com ovo frito ou mexido.',
                                image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pao-com-ovo-1.jpg',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    },
                                    {
                                        name: 'Pão',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Almoço',
                            recipe: {
                                name: 'Arroz com ovo',
                                description: 'Arroz branco feito com alho e óleo acompanado de ovo frito ou mexido.',
                                image: 'https://portal-amb-imgs.clubedaana.com.br/2019/05/arroz-com-ovo-da-Ana-Maria-1024x1019.jpg',
                                ingredients: [
                                    {
                                        name: 'Arroz',
                                        quantity: 0.2,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Lanche',
                            recipe: {
                                name: 'Ovo frito',
                                description: 'Ovo frito na frigideira.',
                                image: 'https://img.cybercook.com.br/foodiefeed/ea6w6xshxpw00fdewn2sbphcimdlnrxp2vnfpdf2-623x350.jpeg?w=623&fit=crop',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Jantar',
                            recipe: {
                                name: 'Farofa de ovo',
                                description: 'Farofa preparada à base de farinha de trigo e ovo.',
                                image: 'https://ovo.blog.br/wp-content/uploads/2019/08/Farofa-de-ovo-1-900x556.jpg',
                                ingredients: [
                                    {
                                        name: 'Farinha',
                                        quantity: 0.3,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    date: '30/01/2021',
                    meal_list: [
                        {
                            name: 'Café da manhã',
                            recipe: {
                                name: 'Pão com ovo',
                                description: 'Pão de forma ou francês com ovo frito ou mexido.',
                                image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pao-com-ovo-1.jpg',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    },
                                    {
                                        name: 'Pão',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Almoço',
                            recipe: {
                                name: 'Arroz com ovo',
                                description: 'Arroz branco feito com alho e óleo acompanado de ovo frito ou mexido.',
                                image: 'https://portal-amb-imgs.clubedaana.com.br/2019/05/arroz-com-ovo-da-Ana-Maria-1024x1019.jpg',
                                ingredients: [
                                    {
                                        name: 'Arroz',
                                        quantity: 0.2,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Lanche',
                            recipe: {
                                name: 'Ovo frito',
                                description: 'Ovo frito na frigideira.',
                                image: 'https://img.cybercook.com.br/foodiefeed/ea6w6xshxpw00fdewn2sbphcimdlnrxp2vnfpdf2-623x350.jpeg?w=623&fit=crop',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Jantar',
                            recipe: {
                                name: 'Farofa de ovo',
                                description: 'Farofa preparada à base de farinha de trigo e ovo.',
                                image: 'https://ovo.blog.br/wp-content/uploads/2019/08/Farofa-de-ovo-1-900x556.jpg',
                                ingredients: [
                                    {
                                        name: 'Farinha',
                                        quantity: 0.3,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    date: '31/01/2021',
                    meal_list: [
                        {
                            name: 'Café da manhã',
                            recipe: {
                                name: 'Pão com ovo',
                                description: 'Pão de forma ou francês com ovo frito ou mexido.',
                                image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pao-com-ovo-1.jpg',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    },
                                    {
                                        name: 'Pão',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Almoço',
                            recipe: {
                                name: 'Arroz com ovo',
                                description: 'Arroz branco feito com alho e óleo acompanado de ovo frito ou mexido.',
                                image: 'https://portal-amb-imgs.clubedaana.com.br/2019/05/arroz-com-ovo-da-Ana-Maria-1024x1019.jpg',
                                ingredients: [
                                    {
                                        name: 'Arroz',
                                        quantity: 0.2,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Lanche',
                            recipe: {
                                name: 'Ovo frito',
                                description: 'Ovo frito na frigideira.',
                                image: 'https://img.cybercook.com.br/foodiefeed/ea6w6xshxpw00fdewn2sbphcimdlnrxp2vnfpdf2-623x350.jpeg?w=623&fit=crop',
                                ingredients: [
                                    {
                                        name: 'Ovo',
                                        quantity: 1,
                                        type: 'unidade(s)'
                                    }
                                ]
                            },
                        },
                        {
                            name: 'Jantar',
                            recipe: {
                                name: 'Farofa de ovo',
                                description: 'Farofa preparada à base de farinha de trigo e ovo.',
                                image: 'https://ovo.blog.br/wp-content/uploads/2019/08/Farofa-de-ovo-1-900x556.jpg',
                                ingredients: [
                                    {
                                        name: 'Farinha',
                                        quantity: 0.3,
                                        type: 'Kg'
                                    },
                                    {
                                        name: 'Ovo',
                                        quantity: 2,
                                        type: 'unidade(s)'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]});
    },
    list_my_recipes(){
        return mockasync({
            my_recipes: [
                {
                    name: 'Pão com ovo',
                    description: 'Pão de forma ou francês com ovo frito ou mexido.',
                    image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pao-com-ovo-1.jpg',
                    ingredients: [
                        {
                            name: 'Ovo',
                            quantity: '1',
                            type: 'unidade(s)'
                        },
                        {
                            name: 'Pão',
                            quantity: '1'
                        }
                    ]
                },
                {
                    name: 'Arroz com ovo',
                    description: 'Arroz branco feito com alho e óleo acompanado de ovo frito ou mexido.',
                    image: 'https://portal-amb-imgs.clubedaana.com.br/2019/05/arroz-com-ovo-da-Ana-Maria-1024x1019.jpg',
                    ingredients: [
                        {
                            name: 'Arroz',
                            quantity: '0.2'
                        },
                        {
                            name: 'Ovo',
                            quantity: '2'
                        }
                    ]
                },
                {
                    name: 'Ovo frito',
                    description: 'Ovo frito na frigideira.',
                    image: 'https://img.cybercook.com.br/foodiefeed/ea6w6xshxpw00fdewn2sbphcimdlnrxp2vnfpdf2-623x350.jpeg?w=623&fit=crop',
                    ingredients: [
                        {
                            name: 'Ovo',
                            quantity: '1'
                        }
                    ]
                },
                {
                    name: 'Farofa de ovo',
                    description: 'Farofa preparada à base de farinha de trigo e ovo.',
                    image: 'https://ovo.blog.br/wp-content/uploads/2019/08/Farofa-de-ovo-1-900x556.jpg',
                    ingredients: [
                        {
                            name: 'Farinha',
                            quantity: '0.3'
                        },
                        {
                            name: 'Ovo',
                            quantity: '2'
                        }
                    ]
                }
            ]
        })
    },
    list_recipes(){
        return mockasync({
            recipes: [
                {
                    name: 'Pão com ovo',
                    description: 'Pão de forma ou francês com ovo frito ou mexido.',
                    image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pao-com-ovo-1.jpg',
                    ingredients: [
                        {
                            name: 'Ovo',
                            quantity: '1'
                        },
                        {
                            name: 'Pão',
                            quantity: '1'
                        }
                    ]
                },
                {
                    name: 'Arroz com ovo',
                    description: 'Arroz branco feito com alho e óleo acompanado de ovo frito ou mexido.',
                    image: 'https://portal-amb-imgs.clubedaana.com.br/2019/05/arroz-com-ovo-da-Ana-Maria-1024x1019.jpg',
                    ingredients: [
                        {
                            name: 'Arroz',
                            quantity: '0.2'
                        },
                        {
                            name: 'Ovo',
                            quantity: '2'
                        }
                    ]
                },
                {
                    name: 'Ovo frito',
                    description: 'Ovo frito na frigideira.',
                    image: 'https://img.cybercook.com.br/foodiefeed/ea6w6xshxpw00fdewn2sbphcimdlnrxp2vnfpdf2-623x350.jpeg?w=623&fit=crop',
                    ingredients: [
                        {
                            name: 'Ovo',
                            quantity: '1'
                        }
                    ]
                },
                {
                    name: 'Farofa de ovo',
                    description: 'Farofa preparada à base de farinha de trigo e ovo.',
                    image: 'https://ovo.blog.br/wp-content/uploads/2019/08/Farofa-de-ovo-1-900x556.jpg',
                    ingredients: [
                        {
                            name: 'Farinha',
                            quantity: '0.3'
                        },
                        {
                            name: 'Ovo',
                            quantity: '2'
                        }
                    ]
                }
            ]
        })
    },
};

export default api;
