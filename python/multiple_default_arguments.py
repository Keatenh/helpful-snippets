# Demonstrate behaviour of calling function that uses multiple arguments with defaults

def print_fmt(string):
    print(" ~ "+string+" ~")

def echos (a,b,c=None,d=''):
    print(c)
    print(a+b+d)

print_fmt("Only passing non-default args:")
echos('e','cho')
print_fmt("Passing all args, using None:")
echos('e','cho',None,'s')
print_fmt("Overriding first default argument:")
echos('e','cho','s')