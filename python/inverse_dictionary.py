# Given a dictionary of lists, return the inverse dictionary, with list value items as new keys

index = {'a': ['1'], 'b': ['1', '2'], 'c': ['2'], 'd': ['1', '2'], 'e': ['1', '2']}
print(index)

def print_fmt(string):
    print(" ~ "+string+" ~")

def invert_dict_of_lists(cur_dict):
    new_dict = {}
    print_fmt("cur_dict.items()")
    print(cur_dict.items())
    for k,v in cur_dict.items():
        print_fmt("key")
        print(k)
        print_fmt("value (list)")
        print(v)
        for x in v:
            print_fmt("list item")
            print(x)
            print_fmt("new_dict")
            print(new_dict)
            print_fmt("new_dict.setdefault(list_item,[]).append(key)")
            # Note: setdefault used to access value like dict[key], but:
            # --> Allows a default value we specify to be returned in case key is not found
            new_dict.setdefault(x,[]).append(k)
            print(new_dict)
    return new_dict

result = invert_dict_of_lists(index)
print(result)