# Nix Functional Programming


##  Core Concepts

### 1. Immutability

In Nix, variables are immutable once defined:

```nix
let
  x = 5;
  # x = 6;  # This would cause an error
in x
```

### 2. Let Bindings
Nix uses let for local variable definitions:
```nix
let
  greeting = "Hello";
  name = "World";
in greeting + " " + name
```

### 3. Functions and Lambda Expressions
Basic Function Definition

```nix
let
  greet = name: "Hello, " + name;
in greet "Alice"  # Returns "Hello, Alice"
```

### Multiple Parameter Functions
```nix
let
  multiply = x: y: x * y;
  result = multiply 3 4;  # Returns 12 in result
```

### 4. Pattern Matching and Attribute Sets
Attribute Set Creation

```nix
{
  name = "John";
  age = 30;
  skills = ["Nix" "Functional Programming"];
}
```

### Accessing Attributes
```nix
let
  person = { name = "Alice"; age = 25; };
in person.name  # Returns "Alice"
```


### 5. Function with Attribute Sets
```nix
let
  greet = { name, age }: "Hello ${name}, you are ${toString age}";
  
  result = greet { 
    name = "Bob"; 
    age = 35; 
  }
in result
```

### 6. Recursion and Recursive Sets
```nix
let
  fibonacci = rec {
    fib0 = 0;
    fib1 = 1;
    fib2 = fib0 + fib1;
    fib3 = fib1 + fib2;
    # Continues recursively
  };
in fibonacci
```


### 7. Importing and Modules
```nix
let
  # Importing another Nix file
  utils = import ./utils.nix;
in utils.someFunction
```

### 8. List Comprehensions
```nix
let
  numbers = [1 2 3 4 5];
  squared = map (x: x * x) numbers;
in squared  # [1 4 9 16 25]
```

### 9. Conditional Expressions
```nix
let
  checkAge = age: 
    if age < 18 
    then "Minor" 
    else "Adult";
in checkAge 20  # Returns "Adult"
```


##  Advanced Concepts
Lazy Evaluation - Nix uses lazy evaluation, meaning expressions are only computed when needed:
```nix
let
  expensiveComputation = 
    builtins.trace "Computing..." 
    (x: x * x);
  
  # Not evaluated until used
  result = expensiveComputation;
in result 42
```

Derivations
The core of Nix's package management:

```nix
derivation {
  name = "example";
  builder = "/bin/sh";
  args = [ "-c" "echo hello > $out" ];
  system = "x86_64-linux";
}
```

## Best Practices

- Keep functions pure
- Avoid side effects
- Embrace immutability
- Use pattern matching
- Leverage lazy evaluation

## Key Differences from Other Languages

- No mutable state
- Functions are first-class citizens
- Strong emphasis on reproducibility
- Declarative package management
- Built-in support for functional programming paradigms

## Conclusion
Nix's functional programming syntax provides a unique approach to package management and system configuration, emphasizing reproducibility, purity, and declarative design.